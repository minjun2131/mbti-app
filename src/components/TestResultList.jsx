import { deleteTestResult, getTestResults } from "../api/testResults";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import TestResultItem from "./TestResultItem";
import { getUserProfile } from "../api/auth";
import showAlert from "../utils/showAlert";

const TestResultList = () => {
  const token = localStorage.getItem("accessToken");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const { data: userProfile } = useQuery({
    queryKey: ["userProfile", token],
    queryFn: () => getUserProfile(token),
    enabled: !!token,
  });

  const {
    data: testResults,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });
  if (isPending) {
    return console.log("로딩");
  }
  if (isError) {
    return console.log(isError);
  }
  const handleDelete = (id) => {
    showAlert({
      title: "게시글 삭제",
      icon: "error",
      text: "게시글이 삭제되었습니다.",
      confirmButtonText: "확인",
    });
    mutation.mutate(id);
  };
  return (
    <ul className="w-3/5">
      {testResults
        .filter(
          (testResults) =>
            testResults.visibility === true ||
            testResults.userid === userProfile?.id
        )
        .map((testResults) => {
          const isOwner = testResults.userid === userProfile?.id;
          return (
            <li
              key={testResults.id}
              className="rounded-xl bg-slate-800 text-slate-50 px-12 my-6"
            >
              <div className="w-full flex justify-between pt-5">
                <h3>{testResults.nickname}</h3>
                <p>{testResults.registration}</p>
              </div>
              <div className="pt-5">
                <h3 className="pt-5">{testResults.mbti}</h3>
                <div className="pt-5">{testResults.descriptions}</div>
              </div>
              <div className="pt-5 flex justify-end pb-5">
                {isOwner ? (
                  <>
                    <TestResultItem
                      id={testResults.id}
                      initialVisibility={testResults.visibility}
                    />
                    <button
                      onClick={() => handleDelete(testResults.id)}
                      className="mx-2.5"
                    >
                      삭제
                    </button>
                  </>
                ) : null}
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default TestResultList;

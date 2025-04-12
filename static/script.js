// static/script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  const googleIdField = document.getElementById("googleId");
  const googlePwField = document.getElementById("googlePw");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 기본 제출 동작 막기

    const studentId = document.getElementById("studentId").value.trim();
    const studentName = document.getElementById("studentName").value.trim();

    if (studentId === "" || studentName === "") {
      alert("학번과 이름을 모두 입력해주세요.");
      return;
    }

    // 구글 계정 생성 규칙
    const googleId = `${studentId}@leesoonsin.hs.kr`;
    const pwPrefix = studentId.substring(0, 2); // 앞 두 자리
    const googlePw = `Lee!${pwPrefix}${studentName}`;

    // 결과 출력
    googleIdField.textContent = googleId;
    googlePwField.textContent = googlePw;
  });
});

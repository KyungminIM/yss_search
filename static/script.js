// static/script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  const googleIdField = document.getElementById("googleId");
  const googlePwField = document.getElementById("googlePw");

  // 예시 명렬표
  const studentList = [
    { id: "24001", name: "김민지", email: "24001@leesoonsin.hs.kr", password: "Lee!24민지" },
    { id: "24002", name: "박서준", email: "24002@leesoonsin.hs.kr", password: "Lee!24서준" },
    { id: "24003", name: "이지은", email: "24003@leesoonsin.hs.kr", password: "Lee!24지은" },
    { id: "24004", name: "최예린", email: "24004@leesoonsin.hs.kr", password: "Lee!24예린" },
    { id: "24005", name: "정우성", email: "24005@leesoonsin.hs.kr", password: "Lee!24우성" }
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 기본 제출 막기

    const inputId = document.getElementById("studentId").value.trim();
    const inputName = document.getElementById("studentName").value.trim();

    if (inputId === "" || inputName === "") {
      alert("학번과 이름을 모두 입력해주세요.");
      return;
    }

    // 학생 정보 검색
    const student = studentList.find(
      (stu) => stu.id === inputId && stu.name === inputName
    );

    if (student) {
      googleIdField.textContent = student.email;
      googlePwField.textContent = student.password;
    } else {
      googleIdField.textContent = "-";
      googlePwField.textContent = "-";
      alert("해당하는 학생 정보를 찾을 수 없습니다.");
    }
  });
});

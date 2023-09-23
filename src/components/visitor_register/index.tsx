export default function VisitorRegister() {
  return (
    <>
      <div className="register_box">
        <div>방문자 등록</div>
        <label>닉네임</label>
        <input type="text" />
        <br></br>
        <label>날짜</label>
        <input value={String(new Date())} type="text" />
        <br></br>
        <label>방명록 내용</label>
        <input type="text" />
        <br></br>
        <label>contact</label>
        <input type="text" />
        <br></br>
      </div>
    </>
  );
}

import Link from "next/link";
import VisitorRegister from "../../src/components/visitor_register";

export default function RegisterPage() {
  return (
    <>
      <Link className="register_button" href={"/"}>
        {" "}
        방명록 보러 가기
      </Link>
      <VisitorRegister />
    </>
  );
}

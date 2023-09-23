import { Button } from "@mui/material";
import VisitorList from "../../src/components/visitor_list";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link className="register_button" href={"/register"}>
        {" "}
        방명록 등록하러 가기{" "}
      </Link>
      <div>
        <VisitorList></VisitorList>
      </div>
    </>
  );
}

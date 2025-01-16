import Cooldown from "@/components/cooldown";
import Logo from "../components/logo";
import Footer from "@/components/footer";
import Formquestion from "@/components/form-question";
import Input from "@/components/form-full";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 ">
      <Logo />
      <Cooldown />
      <Formquestion />
      <Input />
      <Footer />
    </div>
  );
}

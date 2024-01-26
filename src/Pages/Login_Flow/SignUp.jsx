import bg from "../../assets/login_image.jpg";
import { FloatingLabel } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section className="h-screen w-full grid place-items-center ">
      <section className="grid grid-cols-2 bg-[#fff] rounded-lg drop-shadow-2xl overflow-hidden">
        <section
          className="relative h-[550px] w-[400px] grid place-items-center"
          style={{
            background: `url(${bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="text-white absolute p-5">
            <h1 className="text-4xl font-semibold uppercase">Sign Up</h1>
            <p className="font-light">
              Lorem ipsum dolor, sit amet consectetur
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis ad, accusantium unde blanditiis mollitia quod
            </p>
          </div>
          <div className="bg-[#0000007f] w-full h-full top-0 bottom-0"></div>
        </section>
        <section className="px-5 py-10 grid place-items-center">
          <div className="bg-white drop-shadow-2xl py-10 px-5 rounded-lg">
            <div className="grid gap-2">
              <div className="grid grid-cols-2 gap-3">
                <FloatingLabel
                  variant="outlined"
                  label="First Name"
                  sizing="sm"
                  color="success"
                  className="text-[#000000] focus:border-[#000000] border-[#000000]"
                  type="text"
                />
                <FloatingLabel
                  variant="outlined"
                  label="Last Name"
                  sizing="sm"
                  color="success"
                  className="text-[#000000] focus:border-[#000000] border-[#000000]"
                  type="text"
                />
              </div>
              <FloatingLabel
                variant="outlined"
                label="Email Address"
                sizing="sm"
                color="success"
                className="text-[#000000] focus:border-[#000000] border-[#000000]"
                type="email"
              />
              <FloatingLabel
                variant="outlined"
                label="Password"
                sizing="sm"
                color="success"
                className="text-[#000000] focus:border-[#000000] border-[#000000]"
                type="password"
              />
              <FloatingLabel
                variant="outlined"
                label="Confirm Password"
                sizing="sm"
                color="success"
                className="text-[#000000] focus:border-[#000000] border-[#000000]"
                type="password"
              />
            </div>
            <button className="bg-[#4ecdc4] w-full py-2 rounded-lg drop-shadow hover:-translate-y-[1px] transition-all duration-300 ease-in-out font-semibold mt-5 active:translate-y-[1px]">
              Sign Up
            </button>
            <div>
              <p className="text-xs mt-2">
                Already have an account?{" "}
                <Link>
                  <span className="underline">Login here</span>
                </Link>
              </p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

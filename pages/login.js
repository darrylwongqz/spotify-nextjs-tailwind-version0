import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

const Login = ({ providers }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-black">
      <div className="relative mb-5 w-52 h-52">
        <Image
          layout="fill"
          src="https://i.ibb.co/28RTK9x/spotifylogo.png"
          alt=""
        />
      </div>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-[#18D860] text-white p-5 rounded-full hover:scale-110 hover:font-semibold transform transition duration-300 ease-out active:scale-90"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

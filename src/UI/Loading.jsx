import { TailSpin } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-darkBlue-900">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#FFD60A"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

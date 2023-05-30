import { useModal } from "connectkit";

function networkTag(name: string, handler: () => void) {
  return (
    <a onClick={handler} href="#">
      <span className="inline-block bg-cyan-400 text-white font-normal rounded text-sm mt-2 px-2 py-1 sm:px-2 sm:font-medium sm:py-1 break-words mt-0">
        {name}
      </span>
    </a>
  );
}

export function NetworkDisplay() {
  const { openSwitchNetworks } = useModal();
  return (
    <>
      <div className="flex flex-wrap gap-1 md:gap-2 justify-center items-center ">
        {networkTag("sepolia", openSwitchNetworks)}
        {networkTag("scroll testnet", openSwitchNetworks)}
        {networkTag("neon dev", openSwitchNetworks)}
        {networkTag("linea test", openSwitchNetworks)}
        {networkTag("avalanche fuji", openSwitchNetworks)}
        {networkTag("evmos test", openSwitchNetworks)}
        {/* {networkTag("evmos test", openSwitchNetworks)} */}
      </div>
    </>
  );
}

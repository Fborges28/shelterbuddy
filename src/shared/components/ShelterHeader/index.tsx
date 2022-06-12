import logo from "@/shared/assets/logo_shelterbuddy.svg";
import "./styles.scss";

type Props = {
    logoURL?: string;
}

function ShelterHeader({ logoURL }: Props): JSX.Element {
  return (
    <header className="main-header">
      <img src={logoURL || logo} alt="Shelter Buddy logo" id="logo"/>
    </header>
  )
}

export default ShelterHeader;
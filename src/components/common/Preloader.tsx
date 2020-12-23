import preLoader from "../../images/spinner-icon-gif-28.jpg";
import React from "react";

type PreloaderType = {

}
const Preloader = (props: PreloaderType) => {
    return <img alt={'loading'} src={preLoader}/>
}

export default Preloader;
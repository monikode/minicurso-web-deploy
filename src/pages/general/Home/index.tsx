
import { ContainerA } from "../container-a/index";
import { ContainerB } from "../container-b/index";

export function Home() {

    return (
        <div className={`v-full h-screen flex flex-row`}>
            <ContainerA></ContainerA>
            <ContainerB></ContainerB>
        </div>
    )
}


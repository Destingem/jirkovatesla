import useViewportSize from "@mantine/core"
export default function useDevice(width) {

    let mobile = width < 768;
    let tablet = !mobile && width < 1024;
    if(mobile){
        return "m"
    } else if(tablet){
        return "t"
    } else if(width){
        return "l"
    }

    return mobile
}
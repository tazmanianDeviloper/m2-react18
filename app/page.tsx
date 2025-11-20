import {Input} from "@mui/base/Input";
import {useMemo} from "react";

export function useHelper() {
    return useMemo(() => (
        {
            backgroundColor:"blue",
            width:"80vw",
            margin:"0 auto",
        }
        ),[]
    )
}

export default function Home() {
    const styleHelper=useHelper();
    return (
        <Input
            slots={{root: "main"}}
            slotProps={{
                root: {style:styleHelper}
            }}
        />
    );
}

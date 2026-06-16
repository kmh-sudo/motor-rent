import { useQuery } from "@tanstack/react-query";
import { fetchMotors } from "./data";

export const useMotors = () => {
    return useQuery({
        queryKey: ["motors"],
        queryFn: fetchMotors,
        staleTime: 1000 * 60 * 5,

    })
}


"use client"
 
import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import { CustomPagination } from "./customPagination";
 
export const Pagination = ()=> {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
 
    const onChangePage = (newPage: number) => {
        const newSearchParams = new URLSearchParams (searchParams.toString());
        newSearchParams.set(`page`, newPage.toString());
        const newUrl = pathName+`?`+newSearchParams.toString();
        router.push(newUrl);
    }
    return(
        <div className="flex gap-5 border border-solid 1px">
            <div onClick={() => onChangePage(1)}>1</div>
            <div onClick={() => onChangePage(2)}>2</div>
            <div onClick={() => onChangePage(3)}>3</div>
            {/* <CustomPagination /> */}
        </div>
    )
}
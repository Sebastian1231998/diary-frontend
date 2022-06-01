import { useContext } from "react";
import DiaryContext from "../../context/Diary/DiaryProvider";


export const useDiary = ()=> {

    return useContext(DiaryContext)
}
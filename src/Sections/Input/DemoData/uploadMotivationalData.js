import state from "../../../store";
import sortsDisplayText from "../logic/sortsDisplayText";
import motivationalToArray from '../logic/motivationalToArray';

const uploadMotivationalData = () => {
    const data = [["res-1",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-2",-3,5,5,-1,0,-2,0,4,-1,2,-5,-3,-2,4,5,-3,-4,1,1,3,4,-3,-4,-1,3,-4,-1,-2,-2,0,-2,-4,-4,-1,2,2,4,1,4,-5,0,2,-5,-3,1,-2,0,-3,0,3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-3",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-4",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-5",-3,5,5,-1,0,-2,0,4,2,-1,4,2,-5,-4,4,-4,-3,-2,-2,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-6",-3,5,5,-1,1,0,4,2,-3,-1,0,4,-2,-2,-2,-4,1,0,1,5,-5,-4,5,-1,-3,2,-4,1,3,1,2,3,4,-2,-3,-2,3,-3,2,3,-1,4,0,3,-2,-5,-2,0,-1,-1,-4,-1,4,2,-5,-2,1,-4,0,1,-3,0,1,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-7",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-8",-3,5,5,-1,2,1,2,0,4,-1,-5,2,0,-3,1,-1,-4,-2,0,2,2,1,1,3,-5,0,-1,4,3,4,0,4,5,3,-3,-4,-4,-3,-2,4,1,0,-3,-2,-2,-4,-2,2,-1,4,-2,-2,2,-3,-1,-1,0,0,-3,1,-1,5,3,3,1,2,1,1,-2,-5,-4,0,3,-5,0,3,-5,5,-4,-1],
    ["res-9",-3,5,5,-1,0,-2,0,4,2,-1,-1,-1,-2,5,-1,5,1,1,3,1,0,1,-5,0,3,-3,4,-4,2,-3,-3,-2,3,4,1,-3,0,2,1,3,-5,0,2,3,1,-1,0,-2,4,-1,-4,-2,-4,-4,-2,2,-2,1,4,-2,-5,-3,-4,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-10",-3,5,5,-1,0,-2,-4,-2,2,-3,1,-2,-4,-5,5,3,2,3,0,-2,5,1,4,-2,-3,-5,-1,-3,0,3,-2,-3,4,0,1,1,0,-1,1,3,1,-4,4,-1,3,1,3,-3,2,-2,0,2,-1,-2,-5,-4,-1,1,-1,2,0,4,4,-4,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-11",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-12",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,3,5,-5,0,-1,-2,1,-3,3,0,-2,-3,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-13",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,0,1,-4,4,-4,4,-3,1,0,-1,-2,-3,4,-1,2,-4,-4,-5,0,-3,-4,-3,-2,0,1,3,1,2,3,3,1,-3,5,-2,-1,-5,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-14",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-15",-3,5,5,0,0,-1,-4,-1,-1,-3,-4,-2,3,-2,4,1,2,-2,-4,-3,-3,-4,4,-2,2,0,1,-1,-2,3,4,2,-4,1,-5,5,1,1,1,-2,-2,-1,-3,1,3,-3,5,3,1,-1,0,2,2,0,-5,-5,0,0,4,4,-1,-2,3,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-16",-3,5,4,1,-1,-4,-3,-1,1,5,3,-5,4,3,1,4,-3,-4,-2,3,-1,-3,2,-2,2,5,2,0,-4,4,0,4,0,-2,-4,2,4,3,-1,2,3,-5,-2,-1,0,-2,2,1,-1,0,1,-3,-3,0,-1,5,-2,0,-5,3,0,0,0,-5,-2,2,5,-1,1,-2,1,-4,-5,1,2,-3,1,3,-4,-1],
    ["res-17",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,-1,4,1,1,0,3,0,4,-2,-4,-5,1,0,1,2,-2,3,-4,-5,0,2,-3,3,5,-1,-1,-3,-3,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-18",-3,-5,-2,-1,2,-2,0,2,5,4,0,4,-1,-2,5,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-19",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-20",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-21",-3,-4,4,-4,0,-1,5,4,-2,-2,2,-4,-5,-2,4,4,2,5,0,-3,2,-1,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-22",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-1,0,1,-2,-3,1,4,-1,-4,0,4,5,-3,2,0,1,-5,-5,-3,3,-3,3,1,-2,-1,-2,-2,0,-4,-4,1,-3,-4,3,-4,2,4,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-23",-3,5,5,-1,0,-2,0,4,1,1,-2,4,-3,-4,-2,-2,2,-4,4,-5,-2,2,-4,-1,4,0,-4,0,1,-2,1,3,-2,-2,1,-5,0,2,0,-1,-1,0,-3,3,-3,2,-4,1,3,5,1,-3,4,-5,-3,-1,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-24",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,-3,-2,-1,2,1,5,1,0,-5,0,-2,-3,1,-5,-3,4,0,-4,1,1,-1,-1,1,3,-2,3,0,3,-3,-2,1,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-25",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,4,-3,-2,-4,-4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-26",-3,5,5,-2,-4,3,4,-3,3,-1,3,1,-1,4,2,-2,0,0,-2,-4,0,-2,1,0,-1,-3,1,-3,0,-2,-2,3,-4,1,2,-2,-1,-1,4,2,2,0,4,-1,1,-3,5,-3,-5,-1,3,3,5,2,1,-4,1,1,-4,-1,-5,-5,-5,-2,4,0,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-27",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,0,1,0,-1,2,-1,-3,3,3,0,-4,-5,-1,0,-3,-2,-3,-5,3,1,1,-2,5,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-28",-3,2,4,1,3,2,0,0,-2,1,1,0,1,-2,0,-2,-2,1,-2,5,5,5,0,-3,2,2,5,-2,-2,1,-1,1,-5,-4,4,1,2,3,3,-1,4,-1,-5,0,-5,0,5,-1,-4,-1,-5,-4,-1,4,2,-3,-3,2,3,3,-1,-4,4,3,-5,-3,-2,0,-3,-4,2,0,1,3,0,-3,-1,4,-4,-1],
    ["res-29",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,5,-1,1,-2,-5,-2,1,5,4,1,3,1,0,3,0,0,3,3,1,-2,1,-4,0,2,4,1,-1,-3,-3,2,-3,-2,0,4,1,-5,-4,-3,-4,-1,-1,3,-2,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-30",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,1,3,1,-4,-2,3,-2,0,3,-1,1,0,-1,-3,0,1,-5,-3,1,-3,4,5,0,1,2,4,-3,-1,-2,-5,-4,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-31",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-4,1,-1,-4,2,0,-5,4,1,-5,2,-4,0,4,1,0,-3,-1,3,-3,-4,-1,-2,-2,5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-32",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,1,0,3,1,-3,0,-1,-1,1,-2,-4,-3,3,-2,1,2,-5,1,3,1,-1,3,-1,-4,0,-2,0,4,1,5,4,5,3,-2,0,-3,-3,-5,-4,-2,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-33",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-34",-3,5,5,-1,0,-2,-2,3,-1,2,-4,-1,-2,0,-1,-2,1,-5,2,-3,3,2,-5,-3,4,-1,1,-4,2,3,-2,-3,5,1,-2,3,1,-1,1,-3,-4,0,1,4,-3,2,-5,4,4,3,-2,0,1,-2,0,-3,2,-5,1,4,0,-4,-1,0,-1,3,5,-4,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-35",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,5,-2,-5,0,1,0,-5,-2,1,-3,0,0,3,-3,3,-1,-1,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-36",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,-2,-3,0,1,-2,2,-5,4,-1,0,-4,-4,-2,1,-4,-2,-4,-1,1,-2,3,0,-4,-2,-1,1,-1,0,5,3,1,0,2,-3,-5,2,3,1,-3,-3,-2,4,3,-3,3,4,1,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-37",-3,5,5,-1,0,-2,0,4,-1,2,0,-3,-2,2,-1,4,-2,-4,2,-4,-3,-4,2,-4,1,4,4,-5,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-38",-3,5,5,-1,4,-1,-4,-2,1,-3,-3,-4,-3,0,-2,-4,0,-5,2,3,2,-3,1,-5,-1,-2,-2,-4,-1,4,2,3,0,-2,5,-1,0,1,-4,0,-2,1,1,-2,0,-1,-2,3,2,3,0,4,3,-3,1,4,4,-5,1,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-39",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,5,2,-1,1,5,-1,-1,1,2,-1,-4,-5,-2,-3,3,-1,4,0,1,-3,0,3,1,-4,-2,1,-2,-2,-3,1,4,-2,-4,0,0,3,1,-4,1,-5,3,-4,-3,-3,2,3,0,4,-2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-40",-3,5,5,-1,0,-2,0,4,-1,2,-5,1,1,3,-1,1,-3,3,2,0,4,-2,2,4,0,-1,2,2,-4,-5,1,-1,4,0,-3,-4,-4,3,3,-1,4,-2,5,-1,-3,-4,0,-3,-2,3,-2,-2,2,3,-1,5,-5,-3,-5,1,-2,1,0,1,1,-4,-2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-41",1,1,3,-1,1,2,3,-4,5,1,1,1,4,-4,4,-2,-1,-5,-2,-4,-2,-1,0,-3,2,5,-3,-3,-2,1,-1,-2,0,-5,-1,3,-3,2,4,-2,-5,-3,2,5,1,-4,5,0,-2,-4,2,1,-2,0,0,0,0,0,4,-3,-5,-1,-1,3,-1,3,4,2,3,0,-3,4,2,2,0,3,-5,5,-4,-1],
    ["res-42",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,3,-2,2,-1,-2,1,5,-1,-2,0,-3,1,0,-5,1,-4,-2,-5,-3,-4,4,2,-1,0,1,1,3,-3,1,3,-3,0,4,4,0,-4,-2,1,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-43",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,5,3,0,-5,-2,-1,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-44",-3,5,5,-1,-2,2,4,-2,0,2,2,-4,-1,-4,0,-3,4,4,1,-2,-1,-4,-4,2,-3,-5,4,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-45",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-4,1,1,-1,0,4,0,-5,0,-2,2,1,3,-3,-4,1,4,0,-3,2,-2,1,-4,3,4,-5,-4,3,1,-1,5,-2,-2,-3,-3,-4,-1,-2,-3,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-46",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,5,-2,0,-1,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-47",-3,5,5,-1,0,-2,0,4,-1,2,-5,3,5,-1,-2,1,1,-2,2,-4,2,0,4,0,3,-4,1,1,4,4,1,-1,0,2,-4,-2,-5,-2,-4,-5,1,0,0,-1,-3,-2,4,-3,-3,3,-2,-3,-2,-4,1,-3,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-48",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,-4,0,0,1,2,1,0,1,-2,3,4,1,-2,1,-3,3,-1,3,0,3,-3,-2,0,5,-1,1,-5,-3,-3,-2,-2,-1,1,-5,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-49",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-50",3,-1,-2,2,3,-4,5,0,3,-2,-3,-1,4,-4,-2,2,-1,2,-4,-3,3,5,-5,-1,-3,-2,0,1,-3,1,1,-2,2,1,-3,4,-5,-2,-5,0,-1,0,-3,-1,0,1,4,-1,3,2,3,-2,-1,0,0,-5,4,2,0,1,1,2,-4,3,5,0,-3,5,-2,0,-4,1,5,-5,2,1,4,-4,4,-1],
    ["res-51",-3,5,5,-1,0,-2,0,-1,-3,4,2,2,-4,-5,-2,-4,4,-2,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-52",-3,5,-3,-1,-1,-3,0,0,-5,-4,0,-1,-3,4,3,-5,2,5,1,-2,5,2,3,1,-2,1,3,-2,5,1,2,-1,-3,4,0,3,2,3,-2,1,-2,-1,-2,0,2,-2,-4,-4,1,5,1,-5,4,3,-3,4,4,1,-1,-4,-4,-2,3,0,-1,-5,-3,0,2,0,2,1,0,0,-1,4,2,-5,-4,-1],
    ["res-53",-3,5,5,-1,3,-4,-3,1,-2,5,4,1,-2,4,1,1,3,-2,-3,3,0,2,-2,2,-2,3,-3,3,4,-1,0,-2,3,0,0,5,1,-3,-1,0,-5,1,1,-1,2,-1,2,0,-5,-4,-4,-1,-4,-4,4,-5,-2,-5,4,1,0,-3,2,2,-3,-2,-1,-1,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-54",-3,5,5,-1,0,-2,0,4,-1,2,-5,-2,4,2,-4,1,-1,-1,-4,1,4,-4,-2,3,-3,-1,1,-3,4,-5,2,2,-4,0,0,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-55",-3,5,5,-1,-1,1,0,-3,-1,0,0,-5,-4,1,-1,1,4,1,3,4,3,1,1,-3,-2,-5,-1,4,3,-5,0,-2,0,-3,4,1,5,2,-4,3,-1,2,-5,3,2,-2,-2,-2,2,0,1,-2,-3,-4,2,-2,-1,-4,3,4,0,0,-2,-3,-1,5,0,2,-3,-4,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-56",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-57",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-3,1,1,5,1,-4,-3,3,-1,0,0,3,-2,-5,5,-2,2,0,-4,1,2,0,4,1,-1,-2,-2,3,1,-1,1,-3,-3,-1,-5,4,-4,-1,-4,3,0,4,1,3,-2,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-58",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-59",-3,5,5,-1,0,-3,-3,-1,-3,5,-2,3,1,-5,1,3,-3,0,4,2,0,-5,-5,-1,-4,2,0,4,5,0,-2,1,-4,0,-2,-5,4,3,0,-1,1,-2,-1,3,-2,4,-2,1,1,2,3,-4,2,2,-3,0,4,-3,1,3,-1,-2,-1,-2,1,2,-1,-4,0,2,2,4,1,-4,0,3,-5,5,-4,-1],
    ["res-60",-3,5,5,-1,0,-2,0,4,-1,2,0,-2,-4,-5,-4,2,4,1,-3,-2,0,-1,-2,1,0,-2,4,-4,-4,1,5,2,-5,4,-1,3,-3,-5,2,-1,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-61",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,-3,4,-1,-4,0,1,0,-5,4,3,1,3,-3,5,-2,-5,-3,3,-2,0,-1,1,0,2,-1,1,-2,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-62",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,-4,-2,-4,4,4,2,2,-4,2,-4,-2,-3,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-63",-2,2,-5,-1,-5,2,1,-1,3,3,-4,0,0,-4,0,5,-3,3,5,2,-2,3,4,-2,4,-2,-3,-5,3,-3,4,-5,-2,2,-4,3,1,0,2,-4,5,4,0,-2,-3,0,0,2,-4,-5,0,0,1,4,1,2,3,-4,-2,-1,-3,-3,1,1,1,2,5,0,-1,-1,1,-1,-1,4,-1,-3,1,-1,5,-2],
    ["res-64",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,2,-2,4,4,0,-4,0,-3,1,-5,-5,-1,5,-4,-1,1,1,3,2,0,-1,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-65",-3,5,5,0,-5,4,3,-4,4,-3,0,-3,-2,-1,0,4,-1,-2,-3,-3,5,4,-3,-1,0,2,0,0,2,-1,-1,3,-4,-5,0,3,-2,-2,3,-3,-4,1,-5,-4,4,-1,0,1,1,1,-1,2,1,0,2,-4,-1,-5,2,5,1,4,1,2,1,1,-2,3,2,-2,-2,3,-2,2,0,3,-5,5,-4,-1],
    ["res-66",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-67",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,3,-3,-2,-3,5,0,-2,0,-5,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-68",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,1,1,-5,1,1,1,-3,3,3,0,-3,-1,-3,0,-4,5,1,-2,1,-5,-2,0,-4,3,2,2,4,-4,-1,-2,3,-4,5,3,4,-2,0,-2,-1,-3,-2,-3,-1,4,-4,0,1,-2,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-69",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,4,-4,2,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-70",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-71",-3,5,5,-1,0,-2,0,0,0,-3,4,-4,2,-5,-3,-1,0,4,-2,1,1,-4,-5,3,-4,1,-2,-1,0,1,-3,2,-1,-2,-3,1,3,-2,2,-1,1,-5,-5,-4,-2,2,3,4,-2,-1,3,4,-1,0,3,5,1,-1,-4,4,-3,-2,3,2,0,1,5,2,-3,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-72",2,1,0,0,4,-2,-3,2,1,-3,-1,-1,0,1,-4,0,1,2,-4,-2,0,-2,-1,-1,2,4,1,3,-1,-3,-5,-3,-1,-4,-2,-2,3,0,-4,5,5,3,0,3,-1,5,4,-2,-3,3,0,4,1,3,-2,2,1,1,4,3,1,2,-4,-1,-5,0,-5,-5,-2,5,0,4,2,2,-3,-3,-5,5,-4,-1],
    ["res-73",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,-4,0,4,-1,-1,-4,-2,0,2,-3,3,1,3,-3,-2,1,5,4,-2,1,1,3,-5,0,1,0,-1,1,-3,-5,-3,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-74",-3,5,5,-1,4,2,0,-1,-3,2,4,1,-2,1,-2,-2,-5,0,2,-3,-1,-5,-4,3,-4,-4,-5,-3,4,4,-2,0,-1,-4,1,-2,-1,5,-3,0,0,2,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-75",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-76",-3,5,5,-1,0,-2,0,-2,-4,2,-4,1,-3,-5,0,-1,-1,1,-1,5,-2,1,-3,1,0,-4,4,2,-2,-3,-4,1,-3,2,1,-1,-2,-1,5,3,-2,0,1,2,0,4,-4,0,-3,4,-1,-1,-2,-3,2,1,1,3,0,0,3,3,4,-5,3,3,4,-2,2,-5,-5,4,2,2,0,3,-5,5,-4,-1],
    ["res-77",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-78",5,-3,0,-2,2,-4,-4,5,2,3,1,1,3,4,2,3,5,-3,1,-1,-3,2,-1,-1,2,-1,-4,-5,0,2,0,0,-4,-1,4,1,4,-2,-4,-3,-2,-2,-2,-1,2,-5,0,2,-4,-1,5,1,4,-5,-5,-2,-3,5,-1,-3,0,1,-2,3,1,0,0,1,-2,4,-3,0,4,1,3,0,3,-1,3,-5],
    ["res-79",-3,5,-1,-2,-2,0,2,-5,-1,-3,5,1,4,-4,1,-2,2,2,-3,-4,3,1,2,-5,-4,-1,-2,3,3,-3,0,4,-5,-2,1,1,-3,-1,-1,0,-2,-2,4,-3,5,1,-4,3,1,4,0,4,0,-4,-1,3,0,1,3,5,2,-1,-2,-1,0,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-80",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-81",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,-3,-5,0,-2,5,-2,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-82",-3,5,5,-1,-1,-3,-3,-1,-4,4,4,4,3,1,1,0,1,4,-2,0,-3,-5,3,3,1,0,-2,-2,-2,0,-1,-5,0,3,-2,-1,-1,-3,-4,-3,-2,2,-5,-1,1,1,0,1,-4,4,1,-2,0,-4,5,2,5,3,2,-4,-2,3,2,2,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-83",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-84",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-85",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-86",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-5,3,-2,0,-1,0,5,-3,1,-1,0,0,3,-2,1,-3,-3,-1,-5,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-87",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,4,-1,-2,-5,1,-4,4,1,-3,-1,3,0,1,-2,-4,-3,-1,-2,2,-3,3,0,2,0,5,-4,1,0,3,-3,-4,1,4,-5,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-88",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,0,-2,0,3,0,1,-1,1,-1,-2,1,5,-3,-5,-3,-1,-5,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-89",-3,5,5,-2,4,-4,-3,-1,-5,-2,2,-4,-4,-1,0,2,0,4,-2,2,4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-90",-3,5,5,-1,0,-2,0,4,-1,-1,-4,-3,3,-1,0,1,5,0,4,-4,-3,-2,4,-5,-2,2,4,2,-4,2,1,1,-3,4,1,-2,2,-5,1,3,-3,-3,0,0,-2,-4,3,1,-4,1,-2,-2,-1,-5,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-91",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-3,1,-4,-2,-1,-1,3,-3,-1,-2,5,1,3,-2,-3,4,1,-2,0,-2,3,4,-1,-4,0,4,-4,1,-5,1,-5,-4,1,2,1,0,3,-3,-4,0,5,-2,3,-3,-1,0,2,1,3,-1,2,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-92",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,3,3,1,1,-4,-2,4,0,3,-3,-2,5,-3,-2,4,1,3,-5,-2,1,1,4,-1,2,3,0,1,-3,2,1,-1,-4,-5,0,-1,-1,-4,-3,0,0,-2,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-93",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,-1,0,0,0,1,-3,-1,-2,-1,1,1,-5,3,2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-94",-3,5,5,-1,-4,5,4,1,1,3,-2,2,1,-5,-2,-5,1,-4,-5,-4,-3,3,0,5,1,1,-1,-1,2,2,4,3,-2,0,-2,-2,2,-1,-5,-3,1,4,1,-3,2,-1,-1,3,0,3,3,0,-2,0,-2,0,-4,4,0,-2,0,2,4,0,-1,-3,-3,4,-4,-1,-3,1,2,2,0,3,-5,5,-4,-1],
    ["res-95",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-96",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,1,1,4,0,-1,-3,-2,3,-5,-3,5,-3,-4,-1,-1,1,-5,0,2,0,2,-4,-2,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-97",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,3,0,-3,-3,0,3,-2,-5,1,1,1,-1,-4,4,2,1,-3,3,-1,-2,-2,0,0,-4,4,-4,1,-5,5,-3,0,1,-2,-1,1,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-98",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-3,-1,0,-5,5,-2,1,-4,3,0,-2,0,4,-5,2,3,1,4,-4,-4,4,-4,1,-1,-3,0,3,-2,1,2,-4,-1,-2,-3,-3,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-99",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,0,-1,-3,0,-2,3,-2,-5,-5,-2,3,1,5,-3,3,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-100",-3,5,5,-1,-3,-1,0,0,1,-1,2,1,2,3,2,1,-4,4,-2,-2,4,-3,0,0,3,3,3,-1,0,-2,1,2,-2,1,-5,-5,-4,-1,4,-4,-3,-2,0,-2,5,3,-1,-2,0,-3,5,-4,-1,-2,-4,4,1,-5,1,2,4,1,-3,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-101",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-3,4,2,-3,4,-5,-4,1,-2,-4,-1,3,-4,0,-3,0,2,-1,0,5,-5,-1,1,1,0,-3,-4,-2,-2,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-102",-3,5,5,-1,2,-3,3,-5,0,4,0,1,-3,1,1,3,3,-3,-4,5,-4,1,-5,2,-2,4,4,1,-1,0,-1,-4,-2,5,0,0,2,1,-1,-2,3,-1,-4,4,-4,-5,-2,2,3,0,1,1,-2,-3,-1,-2,3,-1,4,0,-2,-3,-2,2,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-103",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,-4,3,0,-3,-2,2,1,-1,0,-1,5,3,-2,-4,0,-2,0,-4,-3,3,-2,-2,1,1,4,1,1,-3,1,-3,-5,2,1,0,-5,4,-1,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-104",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-105",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,2,-4,-4,1,2,4,-2,-1,1,0,-4,-3,-5,0,4,1,-1,3,-1,-4,0,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-106",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,0,-1,-5,5,3,1,1,-2,0,0,0,1,2,1,-2,-2,3,4,-3,-2,-3,-3,-1,-5,1,-1,3,-4,0,1,-3,1,-4,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-107",-3,5,-2,-2,0,4,3,-2,-4,4,-1,-2,0,-4,3,-3,2,2,-1,0,3,-1,1,2,1,3,3,-5,3,0,-2,1,0,-2,1,-3,-2,2,0,-4,-1,-5,4,-3,1,5,0,-5,-1,-3,-1,1,1,-4,-4,5,5,0,-1,1,2,-3,2,0,4,-2,-3,4,-1,-5,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-108",-3,3,-3,-3,3,5,1,0,-1,-1,-4,4,-3,-4,3,0,5,-1,2,-2,5,-1,-5,0,4,-3,-1,0,1,-2,-5,-1,2,1,1,0,-5,2,-4,2,4,3,-2,-4,4,0,-2,-1,-5,3,-1,5,-4,0,1,1,2,0,2,-3,5,-2,3,-2,2,-5,0,1,-3,-4,0,-2,1,4,4,-2,1,3,2,-1],
    ["res-109",-3,-5,4,1,-4,1,0,-3,5,-1,-5,3,1,-3,0,-2,-2,5,1,3,0,-2,-3,-4,0,-3,2,2,-1,1,-3,5,1,5,-1,3,-1,-1,-2,0,-2,4,-5,0,-4,4,-5,-4,2,-2,4,3,-1,-4,4,3,2,-3,0,-2,-2,-1,0,3,0,1,-1,2,2,1,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-110",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-2,-3,2,4,-2,1,1,0,1,3,3,0,0,-5,-3,-3,1,-4,1,0,-3,1,-4,1,4,3,-2,-5,-4,-2,5,-1,-1,0,-1,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-111",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-112",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,-2,5,-5,-2,3,3,-5,-3,-2,-4,0,1,-3,-1,1,3,0,4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-113",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-114",-3,1,0,-1,-5,-2,-2,2,5,-3,4,-3,1,3,0,4,0,4,-3,1,5,1,-5,-1,-5,-4,1,2,0,0,-4,-1,0,5,-2,-4,0,-2,-3,2,-3,2,-5,1,0,1,-1,-1,-2,-3,-1,4,2,3,1,2,-1,3,5,4,-4,-4,1,0,-2,-2,3,3,3,-2,-1,4,2,2,0,3,-5,5,-4,-1],
    ["res-115",-3,5,5,-1,0,-2,0,-4,4,1,3,1,-1,-4,0,1,3,-3,5,1,2,-1,-3,-1,-3,-2,0,-3,-4,-2,-5,2,5,4,2,-2,-1,-2,-4,1,4,3,-2,-1,1,-5,0,-3,-4,-2,3,-2,4,3,2,0,-5,1,4,0,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-116",-3,5,5,-1,0,-2,0,4,-1,2,-2,-4,4,4,-5,-3,2,-4,-2,4,2,-4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-117",-2,3,5,-5,5,2,0,-3,0,-3,-2,0,3,-4,-2,-2,-3,-5,1,3,0,2,-4,-4,-1,4,-5,4,3,0,0,1,0,1,2,5,2,2,-4,-5,3,3,-4,3,-5,-2,1,-1,1,1,4,2,-3,1,4,-1,4,-1,0,-3,2,-1,-2,-1,-3,-1,-2,-3,1,2,4,0,0,-2,-1,5,-1,-4,1,5],
    ["res-118",-3,5,5,-1,0,-2,0,4,-1,-4,2,-3,4,-2,2,-5,-2,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-119",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,4,4,1,-3,1,1,-1,-1,1,-4,5,-3,1,2,-4,-5,-4,0,4,-3,2,0,-4,-4,0,-3,-2,3,-2,3,0,-3,1,-2,-5,3,-1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1],
    ["res-120",-3,5,5,-1,0,-2,0,4,-1,2,-5,4,2,-2,-2,-3,-4,-4,4,2,-4,4,-4,2,1,-1,-3,0,1,0,-1,1,-5,3,-1,0,-2,5,-5,-2,-3,-3,0,3,3,1,-2,4,-4,-3,1,1,1,-2,0,-2,3,-1,3,5,1,-1,2,3,-1,-5,2,-3,0,0,1,4,2,2,0,3,-5,5,-4,-1]];

  const statements = [
    "In times of stress, be bold and valiant",
    "Do not play for safety; it is the most dangerous thing in the world",
    "People are always blaming their circumstances for what they are",
    "I do not believe in circumstances",
    "The people who get on in this world are the people who get up and look for the circumstances they want, and, if they cannot find them, make them",
    "Every man takes the limits of his own field of vision, for the limits of the world",
    "Never be bullied into silence",
    "Never allow yourself to be made a victim",
    "Accept no ones definition of your life, but define yourself",
    "Have no fear of perfection you will never reach it",
    "The Universe Law is impartial",
    "It will give you anything you believe",
    "It will throw you garbage or roses depending on the energy you put in",
    "You are the one in charge, and you must accept that and stand alone",
    "Never be bullied into silence",
    "Never allow yourself to be made a victim",
    "Accept no ones definition of your life, but define yourself",
    "If you are not afraid to face the music, you may someday lead the band",
    "Do not tell me this a difficult problem",
    "If it were not difficult it would not be a problem",
    "Some people walk in the rain, others just get wet",
    "Always do your best",
    "The rich substance of the Universe is yours to do with as you wish",
    "Why settle for so little in life when you can have so much, just be daring to be different in your thinking",
    "Energy and persistence conquer all things",
    "It is by what we ourselves have done, and not by what others have done for us, that we shall be remembered in after ages",
    "To avoid criticism, do nothing, say nothing, be nothing",
    "We achieve a sense of self from what we do for ourselves and how we develop our capacities",
    "If all your efforts have gone into developing others, you are bound to feel empty",
    "You cannot cross a chasm in two small jumps",
    "First we will be best, and then we will be first",
    "Normal is not something to aspire to, it is something to get away from",
    "The grass is not, in fact, always greener on the other side of the fence",
    "No, not at all",
    "Fences have nothing to do with it",
    "The grass is greenest where it is watered",
    "When crossing over fences, carry water with you and tend the grass wherever you may be",
    "Make the most of today",
    "He who has begun his task has half done it",
    "We can try to avoid making choices by doing nothing, but even that is a decision",
    "There is a time for departure even when there is no certain place to go",
    "When one door closes another opens",
    "Expect that new door to reveal even greater wonders and glories and surprises",
    "Feel yourself grow with every experience",
    "And look for the reason for it In the long run, men hit only what they aim at",
    "Therefore, they had better aim at something high",
    "Make the most of today",
    "Translate your good intentions into actual deeds",
    "He who has begun his task has half done it",
    "Do not be afraid to take big steps",
    "You cannot cross a chasm in two small jumps",
    "Some people have greatness thrust upon them",
    "Very few have excellence thrust upon them",
    "Make the most of today",
    "Translate your good intentions into actual deeds",
    "There is a time for departure even when there is no certain place to go",
    "Every man takes the limits of his own field of vision, for the limits of the world",
    "Men who try to do something and fail are infinitely better off than those who try to do nothing and succeed",
    "Don't Sweat the Small Stuff, and it's All Small Stuff",
    "Quit now, you will never make it",
    "If you disregard this advice, you will be halfway there",
    "The Universe Law is impartial",
    "It will give you anything you believe",
    "It will throw you garbage or roses depending on the energy you put in",
    "You are the one in charge, and you must accept that and stand alone",
    "If you think God is coming down to fix things for you, forget it, God is out playing golf",
    "Never be bullied into silence",
    "Never allow yourself to be made a victim",
    "Accept no ones definition of your life, but define yourself",
    "Remember, a dead fish can float downstream, but it takes a live one to swim upstream",
    "Nurture your mind with great thoughts, for you will never go any higher than you think",
    "Once you make the fundamental choice to be the predominant creative force in your life, any approach you choose to take for your own growth and development can work",
    "Self-image sets the boundaries of individual accomplishment",
    "Believing is one thing, doing another",
    "Many talk like the sea but their lives are stagnant marshes",
    "Self-image sets the boundaries of individual accomplishment",
    "People are not remembered by how few times they fail but by how often they succeed",
    "Every wrong step is another step forward",
    "If you are not fired with enthusiasm, you will be fired with enthusiasm",
    "Argue for your limitations, and sure enough, they are yours"
  ];

  const sortsData = motivationalToArray(data, 80, -5);
  const sortsDisplayText2 = sortsDisplayText(sortsData[1]);

  state.setState({
    projectName: "Motivational",
    projectHistoryArray: ["Motivational project loaded from demo data"],
    statements,
    numQsorts: 120,
    numStatements: 80,
    multiplierArray: ["not loaded"],
    mainDataObject: sortsData[1],
    sortsDisplayText: sortsDisplayText2,
    respondentNames: sortsData[0],
    qSortPattern: [
      -5,
      -5,
      -5,
      -5,
      -5,
      -4,
      -4,
      -4,
      -4,
      -4,
      -4,
      -3,
      -3,
      -3,
      -3,
      -3,
      -3,
      -3,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      5
    ]
  });
};

export default uploadMotivationalData;



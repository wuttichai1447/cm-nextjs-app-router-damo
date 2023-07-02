import { type } from "os";
import React from "react";
type Props ={
    params: any;

};
export default function Report({params}:Props){
  return <div>Report id:{params.id}</div>
}
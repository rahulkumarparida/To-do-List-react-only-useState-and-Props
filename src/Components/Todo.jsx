//? Q11. Create a to-do list where users can add and remove tasks. The list should be managed using useState.
import { useState } from "react";
import "./Todo.css";
export default function Todo() {
  let [input, setInput] = useState({ work: "", isCompleted: false });
  let [task, setTask] = useState([]);
  let [count, setCount] = useState(0);
  let [comp, setComp] = useState(0);
  function handleSumbit() {
    if (input.work.length >= 3) {
      setTask([...task, input]);
      setInput({ work: "", isCompleted: false });
      setCount(count + 1);
    }
  }

  function Comp(e) {
    let idc = e.target.getAttribute("id");

    let taskName = e.target.getAttribute("name");

    task.map((ele, idx) => {
      if (ele.work == taskName) {
        ele.isCompleted = true;
        let getTask = document.getElementsByClassName("TaskDisp");
        if (getTask[idc].classList.contains("completed")) {
          console.log("it is already done");
          ele.isCompleted = false;
          getTask[idc].classList.remove("completed");
          setComp(comp - 1);
        } else {
          ele.isCompleted = true;
          getTask[idc].classList.add("completed");
          setComp(comp + 1);
          
        }
      }
    });

    e.preventDefault();
  }

  function remove(e) {
    let idm = e.target.getAttribute("id");
    let Complete = document.getElementsByClassName("Complete");

    setTask(
      task.filter((ele, idx) => {
        if (ele.isCompleted === true) {
          setComp(comp - 1);
        }
        return ele.work != idm;
      })
    );

    setCount(count - 1);
    e.preventDefault();
  }

  return (
    <div className=" w-180 ">
      <div className="heading flex items-center justify-center h-20  bg-zinc-600 border-4 ">
        <h1 className=" text-2xl font-serif subpixel-antialiased italic font-extrabold">
          Simple To-Do List
        </h1>
      </div>{" "}
      <br />
      <div className="SrcBarCont">
        <div className="counts text-xl font-bold font-serif text-cyan-300 p-5 bg-zinc-500">
          <h1>Total Task : - {count}</h1>
          <h1>Total Completed : - {comp}</h1>
        </div>
        <div className="Srh_Bar p-5  flex justify-center  bg-zinc-400">
          <input
            type="text"
            required
            onChange={(e) => {
              setInput({ ...input, work: e.target.value });
              e.preventDefault();
            }}
            placeholder="Enter the Task to ADD"
            value={input.work}
            className="h-8 w-100 border-3 radius-10 rounded-xl mx-2 p-4  focus:border-cyan-800 "
          />
          <button
            onClick={(e) => {
              handleSumbit();
              e.preventDefault();
            }}
            className="border-3 py-1 px-3 rounded-xl hover:bg-black hover:text-white "
          >
            ADD
          </button>
        </div>
      </div>
      <div className=" container my-9 bg-zinc-400 h-100 overflow-y-scroll  ">
        <ul>
          {task.map((ele, idx) => {
            return (
              <div
                key={ele.work}
                className=" my-9 flex justify-between px-5 border-3 py-5 h-20 rounded-md  shadow-lg shadow-black "
              >
                <li>
                  <p className="TaskDisp text-xl font-serif subpixel-antialiased">
                    {idx + 1}. {ele.work}
                  </p>
                </li>
                <div className="btn_container text-lg  italic">
                  <button
                    id={idx}
                    name={ele.work}
                    onClick={Comp}
                    className="Complete mx-5 px-3 border-1 hover:border-2 rounded-sm hover:bg-black hover:text-white shadow-md hover:shadow-cyan-500 transition duration-300 ease-in-out"
                  >
                    Completed
                  </button>
                  <button
                    id={ele.work}
                    onClick={remove}
                    className="mx-5 px-3 border-1 hover:border-2 rounded-sm hover:bg-black hover:text-white  shadow-md hover:shadow-cyan-500 transition duration-300 ease-in-out"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

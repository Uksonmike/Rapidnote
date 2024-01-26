import { useState } from "react";
import profileImage from "../../assets/profile.png";
import { FloatingLabel, Tooltip, Spinner } from "flowbite-react";
import { HiOutlinePower } from "react-icons/hi2";
import { v4 as uuidv4 } from "uuid";
import { RiEdit2Fill } from "react-icons/ri";
import { SiDeepnote } from "react-icons/si";

export default function NotepadHome() {
  const date = new Date();
  const initialNote = {
    id: uuidv4(),
    title: "JavaScript Arrays Fundamentals",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores nulla, itaque aspernatur sunt architecto aliquam quos perspiciatis impedit ipsum!",
    createdAt: date.toISOString(),
  };

  const [notes, setNotes] = useState([initialNote]);
  const [activeNoteIndex, setActiveNoteIndex] = useState(0);
  const [editTitle, setEditTitle] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(notes);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[activeNoteIndex] = {
        ...updatedNotes[activeNoteIndex],
        [name]: value,
      };
      return updatedNotes;
    });
  };

  const updateTitle = () => {
    if (notes[activeNoteIndex].title === "") {
      console.log(notes[activeNoteIndex]);
      setNotes((prevState) => {
        const updatedNotes = [...prevState];
        updatedNotes[activeNoteIndex] = {
          ...prevState[activeNoteIndex],
          title: updatedNotes[activeNoteIndex].content,
        };
        return updatedNotes;
      });
    }
  };

  const addNote = () => {
    if (
      notes[activeNoteIndex].content === "" &&
      notes[activeNoteIndex].title === ""
    )
      return;
    setLoading(true);
    const newNote = {
      id: uuidv4(),
      title: "",
      content: "",
      createdAt: date.toISOString(),
    };
    setTimeout(() => {
      setLoading(false);
      setNotes((prevNotes) => {
        return [newNote, ...prevNotes];
      });
    }, 1000);
    setActiveNoteIndex(0);
  };

  function formatDateTime(isoDateTimeString) {
    var date = new Date(isoDateTimeString);

    function formatTime(hours, minutes, seconds) {
      var ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      return (
        hours +
        ":" +
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds +
        " " +
        ampm
      );
    }

    return {
      date: date.toISOString().split("T")[0],
      time: formatTime(date.getHours(), date.getMinutes(), date.getSeconds()),
    };
  }

  return (
    <section className="h-screen w-full">
      <section className="text-white flex h-full">
        <div className="sidebar bg-[#336699] w-[20%] flex flex-col gap-5">
          <div className="logo p-5 flex items-center gap-2">
            <SiDeepnote size={20} />
            <p>RapidNote++</p>
          </div>
          <div>
            <div className="bg-[#ffffff14] w-full h-0.5"></div>
            <div className="user flex items-center gap-2 my-2 px-5">
              <div className="w-[50px] h-[50px]">
                <img src={profileImage} alt="" />
              </div>
              <p className="name font-medium">Michael Ukson</p>
            </div>
            <div className="bg-[#ffffff14] w-full h-0.5"></div>
          </div>
          <div className="px-5">
            <FloatingLabel
              variant="outlined"
              label="Search Notes"
              sizing="sm"
              color="success"
              className="text-[#fff] focus:border-[#fff] border-[#fff] bg-[#336699]"
              type="text"
            />
          </div>
          <div className="px-5">
            <button
              onClick={addNote}
              className="bg-[#244e78] w-full py-2 rounded hover:bg-[#295a8a] transition-all duration-200 ease-linear flex items-center justify-center gap-2"
            >
              <p>+ Add New Note</p>
              {loading && (
                <Spinner color="info" aria-label="Info spinner example" />
              )}
            </button>
          </div>
          <div className="px-5">
            <p className="my-7">Recents</p>
            <ul className="flex flex-col gap-3">
              {notes.map((note, index) => (
                <button
                  onClick={() => setActiveNoteIndex(index)}
                  key={note.id}
                  className={
                    activeNoteIndex === index
                      ? "bg-[#fff] text-black w-full py-1 rounded-full font-medium transition-all duration-200 ease-linear"
                      : "w-full py-1 rounded-full bg-[#244e78] hover:bg-[#295a8a] font-medium transition-all duration-200 ease-linear"
                  }
                >
                  {note?.title ? note?.title.slice(0, 16) : "New Note"}
                </button>
              ))}
            </ul>
          </div>
        </div>
        <section className="bg-[#D1E5F0] w-full">
          <div className="p-10 h-full flex flex-col">
            <div className="text-black flex justify-between items-center mb-10">
              <p className="text-4xl font-normal">My Notes</p>
              <small>
                &quot;Write what should not be forgotten&quot; - Isabella Alande
              </small>
              <div className="flex items-center gap-2">
                <p className="text-lg font-medium">Logout</p>
                <HiOutlinePower size={25} />
              </div>
            </div>
            <div className="bg-[#F0F6FA] p-10 h-full flex flex-col gap-5">
              <div className="text-[#333] grid gap-2">
                <div className="flex items-center gap-3">
                  {!editTitle ? (
                    <p className="text-2xl font-semibold">
                      {notes[activeNoteIndex].title
                        ? notes[activeNoteIndex].title.slice(0, 30)
                        : notes[activeNoteIndex].content
                        ? `${notes[activeNoteIndex].content.slice(0, 30)}...`
                        : "New Note"}
                    </p>
                  ) : (
                    <div className="">
                      <FloatingLabel
                        variant="standard"
                        label="Edit Title"
                        sizing="sm"
                        name="title"
                        value={notes[activeNoteIndex].title}
                        onChange={handleChange}
                        className="border-[#336699] text-[#336699] w-[300px]"
                      />
                    </div>
                  )}
                  <Tooltip
                    className="drop-shadow"
                    content="Edit Note Title"
                    style="light"
                    placement="right"
                  >
                    <RiEdit2Fill
                      onClick={() => setEditTitle(!editTitle)}
                      className="cursor-pointer"
                      size={25}
                    />
                  </Tooltip>
                </div>
                <p className="font-medium">Created By: Michael Ukson</p>
                <p className="font-medium">
                  Last Modified:{" "}
                  {`${
                    formatDateTime(notes[activeNoteIndex].createdAt).date
                  } at ${
                    formatDateTime(notes[activeNoteIndex].createdAt).time
                  }`}
                </p>
                <div className="bg-[#3333336c] w-full h-0.5 mt-2"></div>
              </div>
              <section className="h-full">
                <textarea
                  className="w-full h-full text-[#333] border-none resize-none bg-transparent"
                  name="content"
                  id="content"
                  placeholder="Write your note here...😁"
                  value={notes[activeNoteIndex].content}
                  onChange={handleChange}
                  onBlur={updateTitle}
                ></textarea>
              </section>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

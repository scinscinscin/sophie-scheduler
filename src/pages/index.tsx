import { NextSeo } from "next-seo";
import { useState } from "react";

const schedules: {
  block: string;
  subjects: { day: string; start: number; end: number; f2f: boolean; gened: boolean }[];
}[] = [
  {
    block: "2csa",
    subjects: [
      { day: "monday", start: 7, end: 9, f2f: true, gened: true },
      { day: "monday", start: 10.5, end: 12, f2f: true, gened: true },
      { day: "monday", start: 13, end: 14.5, f2f: true, gened: true },
      { day: "tuesday", start: 10, end: 12, f2f: true, gened: false },
      { day: "tuesday", start: 14, end: 16, f2f: true, gened: false },
      { day: "wednesday", start: 9, end: 10, f2f: false, gened: true },
      { day: "wednesday", start: 10.5, end: 12, f2f: false, gened: true },
      { day: "wednesday", start: 13, end: 14.5, f2f: false, gened: true },
      { day: "wednesday", start: 15, end: 16, f2f: false, gened: false },
      { day: "wednesday", start: 17, end: 19, f2f: false, gened: false },
      { day: "friday", start: 15, end: 16, f2f: false, gened: false },
      { day: "friday", start: 17, end: 19, f2f: false, gened: false },
      { day: "saturday", start: 8, end: 10, f2f: true, gened: false },
      { day: "saturday", start: 11, end: 15, f2f: true, gened: false },
      { day: "saturday", start: 16, end: 19, f2f: true, gened: false },
    ],
  },
  {
    block: "2csb",
    subjects: [
      { day: "monday", start: 7, end: 9, f2f: true, gened: true },
      { day: "monday", start: 10.5, end: 12, f2f: true, gened: true },
      { day: "monday", start: 13, end: 16.5, f2f: true, gened: false },
      { day: "wednesday", start: 10.5, end: 12, f2f: false, gened: true },
      { day: "wednesday", start: 13, end: 14.5, f2f: false, gened: true },
      { day: "wednesday", start: 15, end: 16, f2f: false, gened: false },
      { day: "wednesday", start: 17, end: 19, f2f: false, gened: false },
      { day: "thursday", start: 10, end: 12, f2f: true, gened: false },
      { day: "friday", start: 14, end: 15, f2f: false, gened: false },
      { day: "friday", start: 15, end: 16, f2f: false, gened: false },
      { day: "friday", start: 17, end: 19, f2f: false, gened: false },
      { day: "saturday", start: 8, end: 11, f2f: true, gened: false },
      { day: "saturday", start: 12, end: 14, f2f: true, gened: false },
      { day: "saturday", start: 15, end: 19, f2f: true, gened: false },
    ],
  },
  {
    block: "2csc",
    subjects: [
      { day: "monday", start: 9, end: 11, f2f: true, gened: true },
      { day: "monday", start: 13, end: 14.5, f2f: true, gened: true },
      { day: "monday", start: 14.5, end: 16, f2f: true, gened: true },
      { day: "monday", start: 17, end: 19, f2f: true, gened: false },
      { day: "tuesday", start: 7, end: 9, f2f: false, gened: false },
      { day: "tuesday", start: 10.5, end: 12.5, f2f: false, gened: false },
      { day: "tuesday", start: 13, end: 14, f2f: false, gened: false },
      { day: "wednesday", start: 11, end: 12, f2f: false, gened: false },
      { day: "wednesday", start: 13, end: 14.5, f2f: false, gened: true },
      { day: "wednesday", start: 14.5, end: 16, f2f: false, gened: true },
      { day: "wednesday", start: 16.5, end: 17.5, f2f: false, gened: false },
      { day: "friday", start: 10, end: 13, f2f: true, gened: false },
      { day: "friday", start: 14, end: 16, f2f: true, gened: false },
      { day: "friday", start: 17, end: 19, f2f: true, gened: false },
      { day: "saturday", start: 15, end: 19, f2f: true, gened: false },
    ],
  },
  {
    block: "2csd",
    subjects: [
      { day: "monday", start: 13.5, end: 15.5, f2f: true, gened: false },
      { day: "monday", start: 16, end: 19, f2f: true, gened: false },
      { day: "tuesday", start: 7, end: 9, f2f: true, gened: true },
      { day: "tuesday", start: 10.5, end: 12, f2f: true, gened: true },
      { day: "tuesday", start: 13, end: 14.5, f2f: true, gened: true },
      { day: "tuesday", start: 15, end: 17, f2f: true, gened: false },
      { day: "tuesday", start: 17, end: 18, f2f: true, gened: false },
      { day: "wednesday", start: 10, end: 13, f2f: true, gened: false },
      { day: "wednesday", start: 15, end: 17, f2f: true, gened: false },
      { day: "thursday", start: 10.5, end: 12, f2f: false, gened: true },
      { day: "thursday", start: 13, end: 14.5, f2f: false, gened: true },
      { day: "thursday", start: 15, end: 17, f2f: false, gened: false },
      { day: "thursday", start: 17, end: 18, f2f: false, gened: false },
      { day: "friday", start: 15, end: 17, f2f: false, gened: false },
      { day: "friday", start: 18, end: 20, f2f: false, gened: false },
    ],
  },
  {
    block: "2cse",
    subjects: [
      { day: "monday", start: 12.5, end: 13.5, f2f: false, gened: false },
      { day: "monday", start: 16, end: 17, f2f: false, gened: false },
      { day: "monday", start: 17, end: 19, f2f: false, gened: false },
      { day: "tuesday", start: 7, end: 9, f2f: true, gened: true },
      { day: "tuesday", start: 10.5, end: 12, f2f: true, gened: true },
      { day: "tuesday", start: 13, end: 14.5, f2f: true, gened: true },
      { day: "wednesday", start: 10, end: 12, f2f: true, gened: false },
      { day: "wednesday", start: 13, end: 15, f2f: true, gened: false },
      { day: "thursday", start: 10.5, end: 12, f2f: false, gened: true },
      { day: "thursday", start: 13, end: 14.5, f2f: false, gened: true },
      { day: "thursday", start: 15, end: 16, f2f: false, gened: false },
      { day: "thursday", start: 17, end: 19, f2f: false, gened: false },
      { day: "saturday", start: 7, end: 11, f2f: true, gened: false },
      { day: "saturday", start: 13, end: 16, f2f: true, gened: false },
      { day: "saturday", start: 17, end: 19, f2f: true, gened: false },
    ],
  },
  {
    block: "2csf",
    subjects: [
      { day: "tuesday", start: 9, end: 11, f2f: true, gened: true },
      { day: "tuesday", start: 13, end: 16, f2f: true, gened: true },
      { day: "tuesday", start: 17, end: 19, f2f: true, gened: true },
      { day: "wednesday", start: 10, end: 12, f2f: true, gened: false },
      { day: "wednesday", start: 13.5, end: 16.5, f2f: true, gened: false },
      { day: "thursday", start: 13, end: 14.5, f2f: false, gened: true },
      { day: "thursday", start: 14.5, end: 16, f2f: false, gened: true },
      { day: "thursday", start: 16.5, end: 17.5, f2f: false, gened: false },
      { day: "thursday", start: 18, end: 19, f2f: false, gened: false },
      { day: "friday", start: 7, end: 9, f2f: false, gened: false },
      { day: "friday", start: 10, end: 12, f2f: false, gened: false },
      { day: "friday", start: 13, end: 14, f2f: false, gened: false },
      { day: "saturday", start: 11.5, end: 15.5, f2f: true, gened: false },
      { day: "saturday", start: 16.5, end: 8.5, f2f: true, gened: false },
    ],
  },
];

const blocks = schedules.map((e) => e.block);
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// prettier-ignore
const stringThing = ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];
const convert = (x: number) => 0.5 * x + 7;

export default function Home() {
  const [blocksToInclude, setBlocksToInclude] = useState<string[]>([]);
  const toggleBlock = (e: string) => {
    if (blocksToInclude.includes(e)) setBlocksToInclude(blocksToInclude.filter((b) => b !== e));
    else setBlocksToInclude([...blocksToInclude, e]);
  };

  const schedulesToConsider = schedules.filter((s) => blocksToInclude.includes(s.block));

  const [highlightGeneds, setHighlightGeneds] = useState(true);
  const [highlightOnlineClasses, setHighlightOnlineClasses] = useState(true);

  return (
    <>
      <NextSeo
        title="kelan free ang sophie ko"
        description="find the perfect times to meet among the reshuffled blocks"
        openGraph={{
          title: "kelan free ang sophie ko",
          description: "find the perfect times to meet among the reshuffled blocks",
        }}
        twitter={{
          handle: "@scinorandex",
        }}
      />

      <h1>kelan 🤸 free 🤸 ang 🤸 sophie 🤸 ko</h1>
      {/* <h2 style={{ marginBottom: "20px" }}>made by lance gulinao. join css, join tomweb.</h2> */}

      <div className="inline">
        {blocks.map((b) => {
          return (
            <div className="inline" key={b}>
              <h2>{b}</h2>
              <input type="checkbox" checked={blocksToInclude.includes(b)} onClick={() => toggleBlock(b)} />
            </div>
          );
        })}
      </div>

      <div className="inline">
        <h2>Highlight geneds</h2>
        <input type="checkbox" checked={highlightGeneds} onClick={() => setHighlightGeneds(!highlightGeneds)} />
      </div>

      <div className="inline">
        <h2>Highlight online classes</h2>
        <input
          type="checkbox"
          checked={highlightOnlineClasses}
          onClick={() => setHighlightOnlineClasses(!highlightOnlineClasses)}
        />
      </div>

      <table>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            {days.map((d, i) => (
              <td key={i}>{d}</td>
            ))}
          </tr>

          {/** We have to render the times from 7 am to 7pm */}
          {Array.from(new Array(26)).map((_, rowIndex) => {
            return (
              <tr>
                <td>
                  {stringThing[rowIndex]} - {stringThing[rowIndex + 1]}
                </td>

                {days.map((day, dayIndex) => {
                  const isBlackened = schedulesToConsider.some(({ subjects }) => {
                    // find for a subject that matches ung converted rowIndex;
                    const convertedStart = convert(rowIndex);
                    return subjects
                      .filter((subject) => {
                        if (subject.day !== day) return false;
                        if (highlightGeneds == false && subject.gened) return false;
                        if (highlightOnlineClasses == false && subject.f2f == false) return false;
                        return true;
                      })
                      .some((subject) => subject.start <= convertedStart && convertedStart < subject.end);
                  });

                  return (
                    <td key={dayIndex} style={{ background: isBlackened ? "#eae5e6" : "transparent" }}>
                      &nbsp;
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

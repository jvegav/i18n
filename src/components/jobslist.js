import React, { useState } from "react";
import Job from "./job";

const JobsList = ({ lenguaje }) => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visites: 27328136
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visites: 8297346317828
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visites: 6237283878438
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead className={lenguaje === 'es' ? 'thead-light' : 'thead-dark'}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Position</th>
            <th scope="col">Company</th>
            <th scope="col">Salary</th>
            <th scope="col">City</th>
            <th scope="col">Publication date</th>
            <th scope="col"> # visites</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} lenguaje={lenguaje} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;

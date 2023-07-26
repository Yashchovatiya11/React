import Table from 'react-bootstrap/Table';
import '../Result/Result.css';
import { useState } from "react";

function Result() {
     
     const [name, setname] = useState('');
     const [rollno, setrollno] = useState('');
     const [s1, sets1] = useState('');
     const [s2, sets2] = useState('');
     const [s3, sets3] = useState('');
     const [s4, sets4] = useState('');
     const [s5, sets5] = useState('');
     const [total, settotal] = useState('');
     const [avg, setavg] = useState('');
     const [delbtn, setdelbin] = useState('');
     const [search, setsearch] = useState('');
     
     const [finalresult, setfinalresult] = useState([]);
     
     const handleNameChange = (e) => {
          setname(e.target.value);
     };
     
     const handleRollnoChange = (e) => {
          setrollno(e.target.value);
     }
     const handles1Change = (e) => {
          sets1(e.target.value);
     }
     const handles2Change = (e) => {
          sets2(e.target.value);
     }
     const handles3Change = (e) => {
          sets3(e.target.value);
     }
     const handles4Change = (e) => {
          sets4(e.target.value);
     }
     const handles5Change = (e) => {
          sets5(e.target.value);
     }
     
     const handleRemove = (index) => {
          const newstudentdata = [...finalresult];
          newstudentdata.splice(index, 1);
          setfinalresult(newstudentdata);
     };
     
     
     
     
     
     const btnhandler = () => {
          
          // let tota = settotal
          
          const obj = {
               name: name,
               rollno: rollno,
               s1: s1,
               s2: s2,
               s3: s3,
               s4: s4,
               s5: s5,
               total: parseInt(s1) + parseInt(s2) + parseInt(s3) + parseInt(s4) + parseInt(s5),
               avg: (parseInt(s1) + parseInt(s2) + parseInt(s3) + parseInt(s4) + parseInt(s5))/5,
               // avg: tota/5
               // avg: avgg()
               btn: <input type="button" value="Delete" />
          }
          
          setfinalresult([...finalresult, obj]);
          console.log(finalresult)
          
          setname('');
          setrollno('');
          sets1('');
          sets2('');
          sets3('');
          sets4('');
          sets5('');
          // handleRollnoChange('');
     
     }

     const getvalue = (e) => {
          setsearch(e.target.value);
     
     }

     const Searchbtn = () => {
          // alert("hello");
          // console.log(setsearch);
          if (setsearch === name)  {
               alert(name);
          }
     }
     
     
     
     return (
          <>
               <h1 className="p-4 text-center"> Student Result </h1>
               <hr></hr>
               Name : <input type="text" onChange={handleNameChange} className="m-2" />
               {/* Name : <input type="text"  onChange={(e) => {setname(e.target.value)}} className="m-2" /> */}
               <br></br>
               Roll No : <input type="number" onChange={handleRollnoChange} name="" id="" className="m-2" minLength={3} maxLength={4} />
               <br></br>
               SUBJECT 1 : <input type="number" onChange={handles1Change} name="" className="m-2" id="s1" maxLength={3} />
               <br></br>
               SUBJECT 2 : <input type="number" onChange={handles2Change} name="" className="m-2" id="s2" maxLength={3} />
               <br></br>
               SUBJECT 3 : <input type="number" onChange={handles3Change} name="" className="m-2" id="s3" maxLength={3} />
               <br></br>
               SUBJECT 4 : <input type="number" onChange={handles4Change} name="" className="m-2" id="s4" maxLength={3} />
               <br></br>
               SUBJECT 5 : <input type="number" onChange={handles5Change} name="" className="m-2" id="s5" maxLength={3} />
               <br></br>

               <input type="button" value="Push UP" onClick={btnhandler} />

               <br /><br />
               <input type="search" name="" id="" onChange={getvalue} />
               <input type="button" value="Search" onClick={Searchbtn}/>
               
               <hr />

               <Table>
                    {/* <Table border={1} className='w-100'> */}
                    <thead >
                         <tr>
                              <th>Name</th>
                              <th>Roll No.</th>
                              <th>S1</th>
                              <th>S2</th>
                              <th>S3</th>
                              <th>S4</th>
                              <th>S5</th>
                              <th>Total</th>
                              <th>Avg.(%)</th>
                              <th>Remove Data</th>

                         </tr>

                    </thead>

                    <tbody>
                         {
                              finalresult.map((x, index) => {
                                   return (
                                        <>
                                             <tr>
                                                  <td>{x.name}</td>
                                                  <td>{x.rollno}</td>
                                                  <td>{x.s1}</td>
                                                  <td>{x.s2}</td>
                                                  <td>{x.s3}</td>
                                                  <td>{x.s4}</td>
                                                  <td>{x.s5}</td>
                                                  <td>{x.total}</td>
                                                  <td>{x.avg}</td>
                                                  <td> <input type="button" onClick={() => handleRemove(index)} value=" Delete"></input></td>
                                             </tr>
                                        </>
                                   )
                              })
                         }

                    </tbody>
                    {/* </Table> */}
               </Table> 


          </>
     );
}

export default Result;
import { Link } from "react-router-dom";

const List = ({ forms }) => {

    var indexid = 0;


   
    return (
        <div className="form-list">

            <div className="form-preview" >


                <table className="table-formlist mt-5 mx-5" >
                    <thead><tr>
                        <th className="form-th">S/N</th>
                        <th className="form-th">Form Title</th>
                        <th className="form-th">Form Description</th>
                        <th className="form-th">Actions</th>
                    </tr>
                    </thead>
                    {forms.map(formlist => {
                        indexid = indexid + 1
                        return <tbody key={formlist.id}><tr >
                            <td className="form-th"> {indexid}</td>
                            <td className="form-th">{formlist.title}</td>
                            <td className="form-th">{formlist.description}</td>
                            <td className="form-th"> 
                             <Link className='btn btn-info m-2 text-white' to={`/form-view/${formlist.id}`} >Display Form</Link> 
                           
                             </td> 
                        </tr>
                        </tbody>
                    })}
                </table>
            </div>



        </div>
    );
}

export default List;
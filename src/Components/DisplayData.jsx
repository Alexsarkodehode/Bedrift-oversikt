import FetchData from "../Hooks/FetchData.jsx";


export default function DisplayData() {
    const data =  FetchData("https://data.ssb.no/api/klass/v1/versions/1847.json");

    console.log(data);

    return (
        <>
            {
                <ol>
                    {data}
                </ol>
            }
        </>
    );
}
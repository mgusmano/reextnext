import getPeople from './getPeople'
import Grid from "./Grid";

export default async function Page({ searchParams }) {
  var people = await getPeople(searchParams.personid)
  if (people === null) {
    return (
      <div className="zcol zcenter" style={{ fontSize: '18px' }}><div>Database Connection Failed</div></div>
    );
  }
  else {
    return (
      <div className="zcol">
        <Grid people={people} />
      </div>
    );
  }
}
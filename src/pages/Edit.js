import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  console.log('id: ', id);

  const mode = searchParams.get('mode');
  console.log('mode: ', mode);

  return (
    <div>
      <h1>Edit</h1>
      <p>This is Edit page.</p>
      <button onClick={() => setSearchParams({who: 'sj'})}>
        Checking Query String
      </button>

      <button onClick={() => {
        navigate('/home');
      }}>
        Go back to Home
      </button>

      <button onClick={() => {
        navigate(-1);
      }}>
        Back btn
      </button>
    </div>
  );
};

export default Edit;

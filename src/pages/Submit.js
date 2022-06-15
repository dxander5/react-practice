import { useRef } from "react";

function Submit(){
  const search = useRef('');
  // const [text, setText] = useState('');
  // useEfect(() => {
  //   console.log(text);
  // }, [text]);
  function sub(e){
    e.preventDefault();
    console.log(search.current.value);
    search.current.value = '';
  }
  console.log('renderizando');
  return (
    <form action="" onSubmit={sub}>
      <input type="text" ref={search} />
      <input type="submit" name="" id="" defaultValue="www" />
    </form>
  )
}

export default Submit;
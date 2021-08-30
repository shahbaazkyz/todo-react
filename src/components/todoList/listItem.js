const ListItem = (prop) => {

const {send} = prop ;



  return (
    <>
     {/* {
    
        listItem.map(
            (value , index) => {
                return (
                    <li>{value.task}</li>
                )
            }
        ) 
     } */}
     <li className={send.isDone? "checked":""}>{send.task}</li>
    </>
  );
};

export default ListItem;

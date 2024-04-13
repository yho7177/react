import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap'
import { chngBaguni, delBaguni } from './../store'


function Cart() {


    // console.log(useSt)
    // console.log(useSt.stock)
    // console.log()
    let dispatch = useDispatch();
    let useSt = useSelector((state) => state)
    console.log(useSt.baguni)

    
    

    return <>
        <h6>{useSt.user.name}의 장바구니(나이 : {useSt.user.age})</h6>

        
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr>
                    <td>1</td>
                    <td>안녕</td>
                    <td>안녕</td>
                    <td>안녕</td>
                </tr> */}
                {
                    useSt.baguni.map((e, i) => <>
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.count}</td>
                            <td><Button onClick={() => {
                                // dispatch(act.actions.nmChng('123'))
                                
                                dispatch(chngBaguni(e.id))
                                // console.log(useSt.baguni)
                            }}>변경</Button></td>
                            <td><Button onClick={() => {
                               dispatch(delBaguni(e.id))
                            }}>삭제</Button></td>
                        </tr>
                    </>
                    )
                }
            </tbody>
        </Table>
    </>
}

export default Cart
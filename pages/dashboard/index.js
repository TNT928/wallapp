import {useState} from 'react'
import WallPost from '../../components/WallPost'
import Layout from '../../components/Layout'



export default function Dashboard() {

    const [posts, setPosts] = useState([])


    return (
        <Layout>
              <div>
        this is the main wall
            <WallPost/>
        </div>
        </Layout>
      
    )
}

// export async function getServerSideProps(){
//     const res = await fetch(``)
// }

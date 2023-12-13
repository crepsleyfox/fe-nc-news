import NewsList from "../1components/Lists/NewsList"

export const HomePage = () => {


    return (
        <div>
            <h1>HomePage</h1>
            <ul className='ListBulletRemoval'>Latests News
                <li><NewsList/></li>
            </ul>
        </div>
    )
}
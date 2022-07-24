import React, {  useEffect} from 'react'
import { useRecoilValue } from 'recoil';
import { measure1 as measure1Atom,measure2 as measure2Atom,
    measure3 as measure3Atom,measure4 as measure4Atom,measure5 as measure5Atom,measure6 as measure6Atom,
    measure7 as measure7Atom,measure8 as measure8Atom } from '../redux/store'



const MusicatGroups = ({musicatResultGroups}) => {

    const measure1 = useRecoilValue(measure1Atom);
    const measure2 = useRecoilValue(measure1Atom);
    const measure3 = useRecoilValue(measure1Atom);
    const measure4 = useRecoilValue(measure1Atom);
    const measure5 = useRecoilValue(measure1Atom);
    const measure6 = useRecoilValue(measure1Atom);
    const measure7 = useRecoilValue(measure1Atom);
    const measure8 = useRecoilValue(measure1Atom);
 


    return (
        <div >
            
          </div>
      );

}


export default MusicatGroups;

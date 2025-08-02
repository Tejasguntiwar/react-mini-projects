// C:\SigmaWeb\React\Practice\react-practice-projects\src\components\feature-flag\context\index.jsx
import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from '../data';

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({ children }) {

  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});


  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      //original service call
      const response = await featureFlagsDataServiceCall(); 
      setEnabledFlags(response)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      throw new Error(error);
    }
  }
  
  useEffect(() => {
    fetchFeatureFlags();
  },[])

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags}}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

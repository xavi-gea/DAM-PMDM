export async function CallAPI(urlToFetch) {

    try {
      
      const response = await fetch(urlToFetch);
  
      if (response.ok) {
  
        return await response.json();
        
      } else {
  
        return null;
      }
  
    } catch (error) {
  
      console.error(error);
      return null;
    }
  }
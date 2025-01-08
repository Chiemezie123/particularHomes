function getCurrentTimeWithAMPM(inComingDate: string | number | Date): string {
    let date: Date = new Date(inComingDate);
  
    let hours: number = date.getHours();
    let minutes: number = date.getMinutes();
    let ampm: string = hours >= 12 ? "PM" : "AM";
  
    hours = hours % 12;
    hours = hours ? hours : 12;
  
    let formattedHours: string = hours < 10 ? "0" + hours : hours.toString();
    let formattedMinutes: string =
      minutes < 10 ? "0" + minutes : minutes.toString();
  
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  
  export { getCurrentTimeWithAMPM };
  
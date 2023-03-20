// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

class ReportApi {
  url = "http://localhost:3000/api/v1/report";

  async reportAccident(params) {
    const formData = new FormData();
    console.log(params);
    if(params.allPictures) {
        formData.append("image", params.allPictures[0]);
    }
    
    formData.append("location", params.location);
    formData.append("noteHospital", params.noteForHospital);
    formData.append("noteAmbulance", params.noteForAmbulance);

    console.log('form data ', formData);

    let res = await fetch(this.url + "/accident", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return await res.json();
  }
}

export default new ReportApi();

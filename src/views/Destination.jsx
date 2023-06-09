import { useState } from "react";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(false);
  let [obj, setObj] = useState({ choices: [] });
  const [payload, setPayLoad] = useState({
    prompt: "Je veux un plan de voyage pour la ville de Toulouse pendant 4 jours sous forme de resumer par jours. Ne pas mentionne les moments de la journee mais juste l'activitée",
    n: 1,
    model: "text-davinci-002"
  });

  const getRes = () => {
    setLoading(true);
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: payload,
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer "+process.env.REACT_APP_OPENAI_API_KEY
      }
    })
      .then((res) => {
        console.log(res);
        responseHandler(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message, e);
      });
  };

  const responseHandler = (res) => {
    if (res.status === 200) {
      setObj(res.data);
      setLoading(false);
    }
  };
  
  return (
    <div className="App">
      <div className="container">
        <div className="d-flex">
          <div className="col-12 text_wrap">
            <textarea
              type="text"
              placeholder="Enter Text"
              readOnly={loading}
              onChange={(e) => {
                setPayLoad({
                  ...payload,
                  prompt: e.target.value
                });
              }}
              value={payload.prompt}
            />
          </div>
          <div className="col-12 text_wrap">
            <p>
              {loading ? (
                <span>loading...</span>
              ) : (
                obj?.choices?.map((v, i) => <div>{v.text}</div>)
              )}
            </p>
          </div>
        </div>
        <div style={{ padding: "0 13px" }}>
          <button disabled={loading} onClick={getRes}>
            {loading ? "Loading... " : "Get response"}
          </button>
        </div>
      </div>
    </div>
  );
}
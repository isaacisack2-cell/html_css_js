function speak(){
    const speech = `welcome ${document.getElementById('name').value} into the system`;
    const utterance = new SpeechSynthesisUtterance(speech);
    utterance.rate = 0.4;
    utterance.pitch = 1.5;
    utterance.volume = 2;
    const voices = window.speechSynthesis.getVoices();
    utterance.lang = "en";
    utterance.voice = voices[0];

    window.speechSynthesis.speak(utterance);
    console.log("welcome user 🟢")
    utterance.onstart = () => console.log("starting to talk");
    utterance.onend = () => console.log("end speaking")
}
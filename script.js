function formatTags() {
    var inputText = document.getElementById("inputText").value.trim();
    var outputText = inputText.replace(/,/g, ', ').trim(); // Add space after commas
    if (outputText.slice(-1) !== ',') {
      outputText += ','; // Ensure there's a comma at the end
    }
    document.getElementById("outputText").innerText = outputText;
    document.getElementById("outputText").style.display = "block";
    document.getElementById("copyButton").style.display = "block";
  }
  
  document.getElementById("copyButton").addEventListener("click", function() {
    var outputText = document.getElementById("outputText").innerText;
    navigator.clipboard.writeText(outputText).then(function() {
      alert("Copied to clipboard!");
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  });
  
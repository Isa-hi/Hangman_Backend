import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

export function connectToArduino(portName, baudRate) {
    // Create a new SerialPort instance
    const port = new SerialPort({ path: portName, baudRate: baudRate });
    // Create a parser to read data line by line
    const listener = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));   

    port.on("error", (err) => {
        console.error("Error:", err.message);
    });
    
    // LOGEAR LOS DATOS RECIBIDOS DESDE EL ARDUINO
    listener.on('data', (data) => {
        console.log("Data received from Arduino:", data);
    });
    
    // FUNCIÓN PARA ENVIAR DATOS AL ARDUINO
    function sendToArduino(data) {       
        // Enviar el dato seguido de un salto de línea (opcional para que Arduino lo detecte con `readStringUntil('\n')`)
        port.write(data, async (err) => {
            if (err) {
                return console.log("Error al enviar datos:", err.message);
            }
            console.log(`\nDatos enviado al Arduino: ${data} `);
        });
    }
    
    return { sendToArduino };
}
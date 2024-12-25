import Foundation
import CryptoKit
import ExpoModulesCore

public class ExpoEncryptionModule: Module {
  
  // Function to perform HMAC-SHA256 hash calculation
  public func hmacSHA256(key: String, message: String) -> String {
    // Convert the key and message to Data
    let keyData = Data(key.utf8) // Key data
    let messageData = Data(message.utf8) // Message data
    
    // Create a SymmetricKey from the key
    let symmetricKey = SymmetricKey(data: keyData)
    
    // Perform the HMAC-SHA256 operation using CryptoKit
    let signature = HMAC<SHA256>.authenticationCode(for: messageData, using: symmetricKey)
    
    // Debugging step: print the result as a hexadecimal string
    let hexString = signature.map { String(format: "%02hhx", $0) }.joined()
    print("Generated HMAC-SHA256 hash: \(hexString)")  // Debugging
    
    return hexString  // Return the result as a hex string
  }

  // Define module functions in Expo
  public func definition() -> ModuleDefinition {
    Name("ExpoEncryption")

    // Define the HMAC-SHA256 function for JavaScript to call
    AsyncFunction("hmacSHA256") { (key: String, message: String) -> String in
      return self.hmacSHA256(key: key, message: message)
    }
  }
}

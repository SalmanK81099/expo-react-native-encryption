package expo.modules.encryption

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec

class ExpoEncryptionModule : Module() {
  override fun definition() = ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module
    Name("ExpoEncryption")

    // Defines the HMAC-SHA256 function
    AsyncFunction("hmacSHA256") { key: String, message: String ->
      // Convert the key and message to bytes
      val keySpec = SecretKeySpec(key.toByteArray(), "HmacSHA256")
      val mac = Mac.getInstance("HmacSHA256")
      mac.init(keySpec)

      // Perform the HMAC-SHA256 hashing
      val hashBytes = mac.doFinal(message.toByteArray())

      // Convert hashBytes to a hexadecimal string (matches iOS behavior)
      val hexString = hashBytes.joinToString("") { byte ->
        "%02x".format(byte)
      }

      hexString // Return the hash as a hexadecimal string
    }
  }
}

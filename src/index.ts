// cannister code goes here

// Import necessary libraries and dependencies
import { Principal } from '@dfinity/principal';
import { Buffer } from 'buffer';

// Define the interface for a file record
interface FileRecord {
  fileId: string;
  fileName: string;
  fileContent: ArrayBuffer;
  owner: Principal;
  createdAt: bigint;
}

// Define the DecentralizedFileStorageCanister class
class DecentralizedFileStorageCanister {
  private files: FileRecord[];

  constructor() {
    this.files = [];
  }

  // Upload a file to the canister
  uploadFile(owner: Principal, fileName: string, fileContent: ArrayBuffer): string {
    const fileId = this.generateFileId();
    const createdAt = BigInt(Date.now());

    const newFile: FileRecord = {
      fileId,
      fileName,
      fileContent,
      owner,
      createdAt,
    };

    this.files.push(newFile);

    return fileId;
  }

  // Retrieve a file from the canister by fileId
  getFile(fileId: string): FileRecord | undefined {
    return this.files.find((file) => file.fileId === fileId);
  }

  // List all files uploaded to the canister
  getAllFiles(): FileRecord[] {
    return this.files;
  }

  // Utility function to generate a unique fileId (you can use your own method for generating unique IDs)
  private generateFileId(): string {
    return 'file-' + Math.random().toString(36).substring(2, 10);
  }
}

// Export the DecentralizedFileStorageCanister class instance
export default new DecentralizedFileStorageCanister();

//Pass phrase
//fortune youth dizzy depend soul nuclear boss term arrange soccer finger solve grape unique parrot host wear grass end raven foster bottom whisper crowd

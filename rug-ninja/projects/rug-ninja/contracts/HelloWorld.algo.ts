import { Contract } from '@algorandfoundation/tealscript';

export class RugNinja extends Contract {
  /** 
   * Rug Ninja should have three possible states
   * Funding: Form is filled, contract is created and the bonding curve is initialized
   * Trading: Trading can occur within the bonding curve, this is between ALGO/RugCoin. No tokens are traded, it's all in boxes
   * Funded: Tokens go to users in accordance to the amt bought, and the initial LP in tman is funded, the contract is considered concluded once everyone claims the tokens
  */

  amtRequested = GlobalStateKey<uint64>();
  amtMinted = GlobalStateKey<uint64>();
  tokenID = GlobalStateKey<AssetID>();



  createApplication(): void {
    
  }

  deleteApplication(...args: any[]): void {
  }


  private createAsset(): void {
    this.token.value = sendAssetCreation({
      configAssetName: 'Orange',
      configAssetUnitName: 'ORA',
      configAssetManager: this.app.address,
      configAssetReserve: this.app.address,
      configAssetFreeze: Address.zeroAddress,
      configAssetClawback: Address.zeroAddress,
      configAssetTotal: TOKEN_SUPPLY,
      configAssetDecimals: TOKEN_DECIMALS,
      configAssetURL: IFPS_URL,
      configAssetMetadataHash: rawBytes(IFPS_HASH),
      fee: 0,
      note: NOTE,
    });
  }

}

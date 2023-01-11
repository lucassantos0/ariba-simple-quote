import PurchaseRequisitionItemsTable from '../components/purchase-req-table'

export default function FirstPost() {
    return (<div><ul>
        <li>OKR: Increase process performance for recurrent/quick/spot purchases</li>
        <li>NOW System receives purchase requisition items from external source. Allow REST API to push data</li>
        <li>NOW Selection screen to create manually a Market quote directly</li>
        <li>NEXT allow buyer to cancel market sourcing</li>
        <li>NEXT Allow automation rules</li>
        <li>NEXT Process outcome from Ariba using WebServices</li>
        <li>LATER Create detailed view of the quotation process from Ariba, allowing the buyer to edit and changes to reflect Ariba</li>
        <li>LATER Allow automatic award based on rules</li>
    </ul>
        <br />
        <PurchaseRequisitionItemsTable /></div>
    );
}
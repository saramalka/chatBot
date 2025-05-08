import React from 'react';
import { useGetAllMessagesQuery, useDeleteMessageMutation } from '../../features/admin/adminApi';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export default function AdminMessagesPage() {
  const { data: messages = [], refetch } = useGetAllMessagesQuery();
  const [deleteMessage] = useDeleteMessageMutation();

  const actionsBody = (rowData) => (
    <Button icon="pi pi-trash" className="p-button-danger" onClick={() => {
      if (window.confirm('למחוק הודעה זו?')) {
        deleteMessage(rowData._id);
        refetch();
      }
    }} />
  );

  return (
    <div className="p-4">
      <h2>הודעות</h2>
      <DataTable value={messages} paginator rows={10}>
        <Column field="userEmail" header="משתמש" />
        <Column field="content" header="תוכן" />
        <Column field="role" header="תפקיד (user/bot)" />
        <Column body={actionsBody} header="פעולות" />
      </DataTable>
    </div>
  );
}

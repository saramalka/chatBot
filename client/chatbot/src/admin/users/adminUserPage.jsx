import React from 'react';
import { useGetUsersQuery, useDeleteUserMutation } from '../../features/admin/adminApi';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

export default function AdminUsersPage() {
  const { data: users = [], refetch } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const handleDelete = async (id) => {
    if (window.confirm('בטוח שברצונך למחוק משתמש זה?')) {
      await deleteUser(id);
      refetch();
    }
  };

  const actionsBody = (rowData) => (
    <Button icon="pi pi-trash" className="p-button-danger" onClick={() => handleDelete(rowData._id)} />
  );

  return (
    <div className="p-4">
      <h2>ניהול משתמשים</h2>
      <DataTable value={users} paginator rows={10}>
        <Column field="username" header="שם משתמש" />
        <Column field="email" header="אימייל" />
        <Column body={actionsBody} header="פעולות" />
      </DataTable>
    </div>
  );
}

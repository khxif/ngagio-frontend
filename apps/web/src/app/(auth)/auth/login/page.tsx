'use client';

import { Button } from '@ngagio/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@ngagio/components/ui/card';
import { P } from '@ngagio/components/ui/typography';
import { FaGoogle } from 'react-icons/fa';
import { supabase } from '../../../../supabase';

export default function LoginPage() {
  async function signInWithGoogle() {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card className="max-w-lg w-full">
      <CardHeader className="text-center">
        <CardTitle className="text-xl md:text-2xl">Welcome to Ngagio!</CardTitle>
        <CardDescription>Login to use the App.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full" onClick={signInWithGoogle}>
          <FaGoogle className="mr-2 size-4" />
          <P className="font-medium"> Login with Google</P>
        </Button>
      </CardContent>
    </Card>
  );
}

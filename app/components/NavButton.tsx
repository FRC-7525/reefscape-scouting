import { Link } from 'expo-router';
import { Button, StyleSheet, View } from 'react-native';

interface NavButtonProps {
  text: string;
  id?: string;
  pageName?: string;
}

function NavButton({ text, id, pageName }: NavButtonProps) {
  if (pageName == undefined) {
    pageName = ""
  }

  return (
    <View>
      <Link href={"/" + pageName} asChild>
        <Button title={text}></Button>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: "auto"
  }
})

export default NavButton;
